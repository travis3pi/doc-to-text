FROM ubuntu

RUN apt update -y
RUN apt install nodejs -y
RUN apt install npm -y
RUN apt install antiword -y
RUN apt install poppler-utils -y
RUN apt install unrtf -y
RUN apt install tesseract-ocr -y

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD npm run dev
