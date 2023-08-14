FROM denoland/deno:alpine

RUN apk update
RUN apk upgrade
RUN apk add ffmpeg # Audio parser
RUN apk add sof-firmware # Audio Drivers
RUN apk add alsa-utils alsaconf # utils

RUN mkdir /app
WORKDIR /app
ADD . .

CMD ["run", "--allow-run", "fingerprint.ts"]
