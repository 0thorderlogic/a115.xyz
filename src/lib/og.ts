import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFile } from "node:fs/promises";

// Cache the font buffer across all build-time calls
let fontCache: ArrayBuffer | null = null;

async function getFont(): Promise<ArrayBuffer> {
  if (!fontCache) {
    const buf = await readFile("./public/fonts/Inter-Bold.ttf");
    fontCache = buf.buffer as ArrayBuffer;
  }
  return fontCache;
}

export interface OgProps {
  title: string;
  subtitle?: string;
  /** Small text shown bottom-left (e.g. a date or tag) */
  bottomLeft?: string;
  /** Top-left label — defaults to "Sanket's Website" */
  label?: string;
}

export async function generateOgImage(props: OgProps): Promise<Uint8Array> {
  const font = await getFont();
  const { title, subtitle, bottomLeft, label = "Sanket's Website" } = props;

  // Dynamic title font size based on length
  const titleSize = title.length > 50 ? 44 : title.length > 30 ? 52 : 60;

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          width: "1200px",
          height: "630px",
          backgroundColor: "#020617",
          fontFamily: "Inter",
        },
        children: [
          // ── Left orange accent strip ──────────────────────────────────
          {
            type: "div",
            props: {
              style: {
                width: "8px",
                height: "100%",
                backgroundColor: "#f97316",
                flexShrink: 0,
              },
            },
          },

          // ── Main content ──────────────────────────────────────────────
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                flex: 1,
                padding: "56px 60px 56px 64px",
              },
              children: [
                // Top row: site label + orange dot
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    },
                    children: [
                      {
                        type: "span",
                        props: {
                          style: {
                            color: "#94a3b8",
                            fontSize: "18px",
                            letterSpacing: "0.01em",
                          },
                          children: label,
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            width: "14px",
                            height: "14px",
                            borderRadius: "50%",
                            backgroundColor: "#f97316",
                          },
                        },
                      },
                    ],
                  },
                },

                // Spacer — pushes title toward vertical centre
                {
                  type: "div",
                  props: { style: { flex: 1 } },
                },

                // Title
                {
                  type: "div",
                  props: {
                    style: {
                      color: "#f8fafc",
                      fontSize: `${titleSize}px`,
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.1,
                    },
                    children: title,
                  },
                },

                // Subtitle (optional)
                ...(subtitle
                  ? [
                      {
                        type: "div",
                        props: {
                          style: {
                            color: "#a855f7",
                            fontSize: "24px",
                            marginTop: "18px",
                            lineHeight: 1.45,
                            letterSpacing: "-0.01em",
                          },
                          children: subtitle,
                        },
                      },
                    ]
                  : []),

                // Spacer — pushes bottom row to foot
                {
                  type: "div",
                  props: { style: { flex: 1 } },
                },

                // Bottom row: tag/date + URL
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    },
                    children: [
                      {
                        type: "span",
                        props: {
                          style: {
                            color: "#64748b",
                            fontSize: "16px",
                            letterSpacing: "0.02em",
                          },
                          children: bottomLeft ?? "",
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: {
                            color: "#f97316",
                            fontSize: "16px",
                            letterSpacing: "0.04em",
                          },
                          children: "a115.xyz",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: font,
          weight: 800,
          style: "normal",
        },
      ],
    },
  );

  return new Resvg(svg).render().asPng();
}
