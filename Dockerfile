FROM python:3
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
COPY static/index.html /msn/templates
EXPOSE 6000
CMD ["python"]
