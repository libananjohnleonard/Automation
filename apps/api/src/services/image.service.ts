export const generateImage = async (
  prompt: string
) => {

  console.log("Generating image for:", prompt);

  return {
    url: `https://dummyimage.com/1024x1024/000/ffffff&text=${encodeURIComponent(
      prompt
    )}`
  };

};