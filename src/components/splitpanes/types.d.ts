interface Pane {
  id: number;
  el: HTMLElement;
  min: number;
  max: number;
  givenSize: number;
  size: number;
  index: number | null;
}

interface PaneUpdate {
  addedPane: Pane;
  removedPane: Pane;
}

interface DragOffsets {
  x: number;
  y: number;
}

interface PaneSums {
  prevPanesSize: number;
  nextPanesSize: number;
  prevReachedMinPanes: 0;
  nextReachedMinPanes: 0;
}

interface SplitterTouch {
  mouseDown: boolean;
  dragging: boolean;
  activeSplitter: number | null;
  cursorOffset: number;
}

interface SplitterTap {
  splitter: number | null;
  timeoutId: NodeJS.Timeout;
}
