import Codegen from "@qgustavor/stream-audio-fingerprint";

const decoder = Deno.run({
  cmd: [
    "ffmpeg",
    "-i",
    "hw:3,0",
    "-acodec",
    "pcm_s16le",
    "-ar",
    "22050",
    "-ac",
    "1",
    "-f",
    "alsa",
    "-v",
    "fatal",
    "pipe:1",
  ],
  stdout: "piped",
  stdin: "inherit",
});

console.log("running");

const fingerprinter = new Codegen();
for await (const audioData of decoder.stdout.readable) {
  const data = fingerprinter.process(audioData);
  for (let i = 0; i < data.tcodes.length; i++) {
    console.log(`time=${data.tcodes[i]} fingerprint=${data.hcodes[i]}`);
  }
}
