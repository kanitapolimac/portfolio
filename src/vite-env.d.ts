/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    "image-slot": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        id?: string;
        placeholder?: string;
        shape?: "rect" | "rounded" | "circle" | "pill";
        radius?: string | number;
        src?: string;
        mask?: string;
        fit?: "cover" | "contain" | "fill";
        position?: string;
      },
      HTMLElement
    >;
  }
}
