import React, { useRef, useEffect } from "react";

export const Canvas: React.FC<{}> = () => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  const nickname = "aaaaaaaaaaaaaaa";

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");
      let ctx = canvasCtxRef.current;
      ctx!.canvas.width = 750;
      ctx!.canvas.height = 250;

      const userName = () => {
        ctx!.save();
        ctx!.fillStyle = "black";
        ctx!.rotate((-14 * Math.PI) / 180);

        if (nickname.length <= 10) {
          ctx!.font = "16px Pixellari";
          ctx!.fillText("@" + nickname, 434, 301);
        } else if (nickname.length > 10 && nickname.length <= 12) {
          ctx!.font = "16px Pixellari";
          ctx!.fillText("@" + nickname, 432, 301);
        } else if (nickname.length > 12 && nickname.length <= 13) {
          ctx!.font = "15px Pixellari";
          ctx!.fillText("@" + nickname, 425, 301);
        } else if (nickname.length > 13 && nickname.length <= 14) {
          ctx!.font = "15px Pixellari";
          ctx!.fillText("@" + nickname, 425, 301);
        } else {
          ctx!.font = "13px Pixellari";
          ctx!.fillText("@" + nickname, 426, 301);
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

      userName();
      background();
    }
  }, []);

  const downloadCanvas = () => {
    const link = document.createElement("a");
    link.download = nickname + "_doggos.png";
    link.href = canvasRef.current!.toDataURL();
    link.click();
  };

  return (
    <>
      <canvas className="" ref={canvasRef}></canvas>
      <button onClick={downloadCanvas}>Download</button>
    </>
  );
};
