export const generateVideo = async (
  scenes: any[]
) => {

  console.log(
    "Generating video from scenes:",
    scenes.length
  );


  return {

    url:
      `https://example.com/videos/generated-${Date.now()}.mp4`

  };

};