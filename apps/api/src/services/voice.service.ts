export const generateVoice = async (
  script: string
) => {

  console.log("Generating voice for:", script);

  return {
    url: `https://example.com/audio/${encodeURIComponent(script)}.mp3`
  };

};