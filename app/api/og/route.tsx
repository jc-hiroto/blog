import { ImageResponse } from "next/og";

export const runtime = "edge";
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const hasTitle = searchParams.has("title");
  const hasDescription = searchParams.has("description");
  const hasCover = searchParams.has("cover");
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : "Blog by jc-hiroto";
  const description = hasDescription
    ? searchParams.get("description")
    : "A blog by jc-hiroto. Mostly about Software Engineering and Photography.";
  const slug = searchParams.get("slug");
  const cover = searchParams.get("cover");
  const monoRegular = await fetch(
    new URL("/assets/mono-regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const monoSemibold = await fetch(
    new URL("/assets/mono-semibold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  if (hasCover) {
    const coverUrl = `https://blog.jchiroto.dev/_next/image?url=%2Fimg%2F${encodeURIComponent(
      cover as string
    )}&w=1200&q=75`;
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            backgroundColor: "black",
            fontWeight: 800,
            border: "10px solid white",
          }}
        >
          {/* eslint-disable-next-line */}
          <img src={coverUrl} style={{ objectFit: "cover" }} tw="w-full h-80" />
          <div tw="w-full flex flex-row justify-start px-1 mt-6">
            <div
              style={{ lineHeight: 1 }}
              tw="w-full flex flex-col h-full justify-center ml-16 self-center"
            >
              <p
                style={{ fontFamily: "mono-semibold" }}
                tw="text-7xl text-gray-300"
              >
                {"> "}
                {title}
              </p>
              <p tw="w-[90%] text-3xl text-gray-300 mt-2">{description}</p>
              <p tw="w-[90%] text-3xl text-gray-500 -mt-0">
                blog.jchiroto.dev/posts/{slug}
              </p>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          { name: "mono-regular", data: monoRegular, style: "normal" },
          { name: "mono-semibold", data: monoSemibold, style: "normal" },
        ],
      }
    );
  } else {
    // return for home
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "black",
            fontWeight: 800,
            border: "10px solid white",
          }}
        >
          <div tw="flex w-full h-16 bg-white"></div>
          <p
            style={{ fontFamily: "mono-semibold" }}
            tw="mx-auto mt-28 text-8xl text-gray-300"
          >
            {"> "}
            {title}
          </p>
          <div tw="w-full flex flex-col justify-center align-center px-36 mt-8">
            <p tw="text-4xl text-gray-400 mx-auto">{description}</p>
            <p tw="text-5xl text-gray-200 mt-8">blog.jchiroto.dev</p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          { name: "mono-regular", data: monoRegular, style: "normal" },
          { name: "mono-semibold", data: monoSemibold, style: "normal" },
        ],
      }
    );
  }
}
