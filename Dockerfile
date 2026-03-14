# Base Node image
FROM node:20

# Install dependencies
RUN npm install -g playwright allure-commandline

# Set working dir
WORKDIR /app

# Copy package.json and MCP config
COPY package*.json ./
COPY mcp.json ./

# Install project dependencies
RUN npm install

# Copy entire project
COPY . .

# Expose MCP port if needed
EXPOSE 4000

# Default command to start MCP + Playwright tests
CMD ["npx", "playwright", "run-test-mcp-server"]