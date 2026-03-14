# Base Node.js image
FROM node:20-bullseye

# Set working dir
WORKDIR /usr/src/app

# Copy package files and install deps
COPY package.json package-lock.json ./
RUN npm ci

# Copy MCP config
COPY .vscode/mcp.json ./mcp.json

# Copy rest of project
COPY . .

# Install Playwright browsers + deps
RUN npx playwright install --with-deps

# Expose report folder
VOLUME ["/usr/src/app/report"]

# Default command: run MCP then Playwright
CMD ["npx", "mcp", "run"]