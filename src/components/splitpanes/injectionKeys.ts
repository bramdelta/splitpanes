import type { InjectionKey, ComputedRef, Ref } from "vue";

export const panesKey: InjectionKey<Ref<Pane[]>> = Symbol("panes");
export const indexedPanesKey: InjectionKey<Ref<Map<string, Pane>>> =
  Symbol("indexedPanes");
export const horizontalKey: InjectionKey<ComputedRef<boolean>> =
  Symbol("horizontal");
export const requestUpdateKey: InjectionKey<
  (args: { uid: number } & Partial<Omit<Pane, "uid">>) => void
> = Symbol("requestUpdate");
export const onPaneAddKey: InjectionKey<(pane: Pane) => void> =
  Symbol("onPaneAdd");
export const onPaneRemoveKey: InjectionKey<(paneId: number) => void> =
  Symbol("onPaneRemove");
export const onPaneClickKey: InjectionKey<(paneId: number) => void> =
  Symbol("onPaneClick");
