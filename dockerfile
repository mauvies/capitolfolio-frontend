FROM node:latest AS ui-build
WORKDIR /usr/src/app
COPY . ./frontend/ 
RUN cd frontend && npm install && npm run build

FROM nginx:latest
COPY --from=ui-build /usr/src/app/frontend/build /usr/share/nginx/html