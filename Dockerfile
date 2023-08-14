FROM denoland/deno:alpine

RUN apk update
RUN apk upgrade
RUN apk add ffmpeg # Audio parser
RUN apk add alsa-utils alsaconf # Audio Drivers

ENTRYPOINT [ "tail", "-f", "/dev/null" ]
