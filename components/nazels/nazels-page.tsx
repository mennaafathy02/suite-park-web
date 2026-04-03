"use client";

import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useNazels } from "./hooks/useNazels";
import { useCreateNazel } from "./hooks/useCreateNazel";
import { useUpdateNazel } from "./hooks/useUpdateNazel";
import { useDeleteNazel } from "./hooks/useDeleteNazel";
import type { Nazel } from "./types";

type DialogState =
  | { mode: "create" }
  | { mode: "edit"; nazel: Nazel }
  | { mode: "delete"; nazel: Nazel }
  | null;

export default function NazelsPage() {
  const t = useTranslations("nazels");
  const locale = useLocale();
  const { data: response, isLoading, isError } = useNazels();
  const createMutation = useCreateNazel();
  const updateMutation = useUpdateNazel();
  const deleteMutation = useDeleteNazel();

  const [dialog, setDialog] = useState<DialogState>(null);
  const [nameAr, setNameAr] = useState("");
  const [nameEn, setNameEn] = useState("");

  const nazels = response?.data ?? [];

  function openCreate() {
    setNameAr("");
    setNameEn("");
    setDialog({ mode: "create" });
  }

  function openEdit(nazel: Nazel) {
    setNameAr(nazel.name_ar);
    setNameEn(nazel.name_en);
    setDialog({ mode: "edit", nazel });
  }

  function openDelete(nazel: Nazel) {
    setDialog({ mode: "delete", nazel });
  }

  function closeDialog() {
    setDialog(null);
  }

  function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    createMutation.mutate(
      { name_ar: nameAr, name_en: nameEn },
      { onSuccess: closeDialog },
    );
  }

  function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    if (dialog?.mode !== "edit") return;
    updateMutation.mutate(
      { id: dialog.nazel.id, data: { name_ar: nameAr, name_en: nameEn } },
      { onSuccess: closeDialog },
    );
  }

  function handleDelete() {
    if (dialog?.mode !== "delete") return;
    deleteMutation.mutate(dialog.nazel.id, { onSuccess: closeDialog });
  }

  return (
    <section className="container mx-auto md:py-10 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">{t("title")}</h1>
        <Button onClick={openCreate}>
          <Plus className="size-4" />
          {t("add_nazel")}
        </Button>
      </div>

      {/* Table */}
      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-14 bg-gray-100 rounded-md animate-pulse"
            />
          ))}
        </div>
      ) : isError ? (
        <div className="text-center py-12">
          <p className="text-red-500">{t("loading_error")}</p>
        </div>
      ) : nazels.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">{t("no_nazels")}</p>
        </div>
      ) : (
        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-start">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-start text-sm font-medium text-gray-600">
                  {t("name_ar")}
                </th>
                <th className="px-4 py-3 text-start text-sm font-medium text-gray-600">
                  {t("name_en")}
                </th>
                <th className="px-4 py-3 text-start text-sm font-medium text-gray-600">
                  {t("created_at")}
                </th>
                <th className="px-4 py-3 text-end text-sm font-medium text-gray-600">
                  {t("actions")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {nazels.map((nazel) => (
                <tr key={nazel.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {nazel.name_ar}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {nazel.name_en}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {new Date(nazel.created_at).toLocaleDateString(
                      locale === "ar" ? "ar-SA" : "en-US",
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => openEdit(nazel)}
                      >
                        <Pencil className="size-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => openDelete(nazel)}
                      >
                        <Trash2 className="size-4 text-red-500" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Create / Edit Dialog */}
      <Dialog
        open={dialog?.mode === "create" || dialog?.mode === "edit"}
        onOpenChange={(open) => !open && closeDialog()}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {dialog?.mode === "edit" ? t("edit_nazel") : t("add_nazel")}
            </DialogTitle>
            <DialogDescription>
              {dialog?.mode === "edit" ? t("edit_nazel") : t("add_nazel")}
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={dialog?.mode === "edit" ? handleUpdate : handleCreate}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {t("name_ar")}
              </label>
              <Input
                value={nameAr}
                onChange={(e) => setNameAr(e.target.value)}
                dir="rtl"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {t("name_en")}
              </label>
              <Input
                value={nameEn}
                onChange={(e) => setNameEn(e.target.value)}
                dir="ltr"
                required
              />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={closeDialog}>
                {t("cancel")}
              </Button>
              <Button
                type="submit"
                disabled={
                  createMutation.isPending || updateMutation.isPending
                }
              >
                {dialog?.mode === "edit" ? t("save") : t("create")}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={dialog?.mode === "delete"}
        onOpenChange={(open) => !open && closeDialog()}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("delete_nazel")}</DialogTitle>
            <DialogDescription>{t("delete_warning")}</DialogDescription>
          </DialogHeader>
          <p className="text-sm text-gray-600">
            {t("confirm_delete")}{" "}
            <strong>
              {dialog?.mode === "delete" &&
                (locale === "ar"
                  ? dialog.nazel.name_ar
                  : dialog.nazel.name_en)}
            </strong>
            ?
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={closeDialog}>
              {t("cancel")}
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleteMutation.isPending}
            >
              {t("delete")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
