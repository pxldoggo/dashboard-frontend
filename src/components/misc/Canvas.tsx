import React, { useRef, useEffect } from "react";

export const Canvas: React.FC<{}> = () => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");
      let ctx = canvasCtxRef.current;
      ctx!.canvas.width = 750;
      ctx!.canvas.height = 250;

      const userName = () => {
        // using the font family Pixellari insert the text "Vitagliano" into the canvas 490px to left and 174px to top and color it red
        ctx!.font = "16px Pixellari";
        ctx!.fillStyle = "black";
        //rotate text -14 degrees
        ctx!.rotate((-14 * Math.PI) / 180);
        ctx!.fillText("@leafaar", 435, 302);
      };

      const background = () => {
        // set an image as the background of the canvas
        let img = new Image();
        ctx!.rotate((14 * Math.PI) / 180);
        img.src = "/doggobanner.png";
        img.onload = function () {
          ctx!.globalCompositeOperation = "destination-over";
          ctx!.drawImage(img, 0, 0, 750, 250);
        };
      };

      userName();
      background();
    }
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};
