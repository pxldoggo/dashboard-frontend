import React, { useRef, useEffect, useState } from "react";
export const Canvas: React.FC<{}> = (info) => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  // @ts-ignore
  const user = info.info.twitter.user;
  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");
      let ctx = canvasCtxRef.current;
      ctx!.canvas.width = 750;
      ctx!.canvas.height = 250;

      const customFont = new FontFace(
        "Pixellari",
        "url(./fonts/Pixellari.ttf)"
      );

      customFont.load().then(function (font) {
        const userName = () => {
          ctx!.save();
          ctx!.fillStyle = "black";
          ctx!.rotate((-14 * Math.PI) / 180);

          if (user.username.length <= 10) {
            ctx!.font = "16px Pixellari";
            ctx!.fillText("@" + user.username, 434, 301);
          } else if (user.username.length > 10 && user.username.length <= 12) {
            ctx!.font = "16px Pixellari";
            ctx!.fillText("@" + user.username, 432, 301);
          } else if (user.username.length > 12 && user.username.length <= 13) {
            ctx!.font = "15px Pixellari";
            ctx!.fillText("@" + user.username, 425, 301);
          } else if (user.username.length > 13 && user.username.length <= 14) {
            ctx!.font = "15px Pixellari";
            ctx!.fillText("@" + user.username, 425, 301);
          } else {
            ctx!.font = "13px Pixellari";
            ctx!.fillText("@" + user.username, 426, 301);
          }
          ctx!.restore();
        };

        const background = () => {
          // set an image as the background of the canvas
          ctx!.save();
          let img = new Image();
          ctx!.rotate((14 * Math.PI) / 180);
          img.src = "/doggobanner.png";
          img.onload = function () {
            ctx!.globalCompositeOperation = "destination-over";
            ctx!.drawImage(img, 0, 0, 750, 250);
          };
          ctx!.restore();
        };

        document.fonts.load('10pt "Pixellari"').then(userName());
        background();
      });
    }
  }, []);

  const downloadCanvas = () => {
    const link = document.createElement("a");
    link.download = user.username + "_doggos.png";
    link.href = canvasRef.current!.toDataURL();
    link.click();
  };

  return (
    <>
      <main role="main" className="">
        <section className="max-w-[750px]">
          <div>
            <div className="w-full bg-cover bg-no-repeat bg-center h-[200px] bg-banner">
              <canvas className="w-full h-full" ref={canvasRef}></canvas>
            </div>
            <div className="p-4">
              <div className="relative flex w-full">
                <div className="flex flex-1">
                  <div className="mt-[-6rem]">
                    <div className="h-[9rem] w-[9rem] rounded-full relative avatar">
                      <img
                        className="md rounded-full h-[9rem] w-[9rem] relative border-4 border-gray-100 dark:border-gray-900"
                        src={user.profile_image_url}
                        alt=""
                      />
                      <div className="absolute"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col text-right">
                  <button
                    onClick={downloadCanvas}
                    className="inline-flex items-center rounded-md border border-transparent bg-soft-blue-100 px-4 py-3 font-bold text-sm text-white shadow-sm hover:bg-soft-blue-200 focus:outline-none focus:ring-2 focus:ring-soft-blue-100 focus:ring-offset-2"
                  >
                    Download Banner
                  </button>
                </div>
              </div>

              <div className="space-y-1 justify-center w-full mt-3 ml-3">
                <div>
                  <h2 className="text-xl leading-6 font-bold text-gray-800 dark:text-white">
                    {user.name}
                  </h2>
                  <p className="text-sm leading-5 font-medium dark:text-gray-100 text-gray-600">
                    @{user.username}
                  </p>
                </div>
                <div className="mt-3">
                  <p className="text-gray-800 dark:text-white leading-tight mb-2">
                    {user.description}
                  </p>
                  <div className="dark:text-gray-100 text-gray-600 flex"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
