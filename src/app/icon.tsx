import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0c87e8 0%, #0069c5 100%)",
          borderRadius: 8,
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C9.2 2 6.6 3.2 5.2 5.5c-1.4 2.3-1.6 5.2-1 7.8.4 1.9 1.2 3.7 1.5 5.6.2 1.3.1 2.6.5 3.8.5 1.3 1.5 2.1 2.8 2.1h1.2c1.3 0 2.3-.7 2.8-2.1.5-1.2.4-2.5.6-3.8.3-1.9 1.1-3.7 1.5-5.6.6-2.6.4-5.5-1-7.8C17.4 3.2 14.8 2 12 2zm0 2.2c2.1 0 3.8 1.1 4.6 2.8.7 1.6.5 3.7-.6 5.4-.5.8-1 1.6-1.2 2.5-.15.5-.15 1-.3 1.5-.15.4-.55.75-.95.95h-1c-.4 0-.75-.25-.95-.65-.2-.4-.2-.9-.35-1.4-.2-.9-.7-1.7-1.2-2.5-1.1-1.7-1.3-3.8-.6-5.4.8-1.7 2.5-2.8 4.6-2.8z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
