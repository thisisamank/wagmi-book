# AKXR 2025

A Hugo-based documentation site built with the hugo-book theme.

## Prerequisites

- [Hugo](https://gohugo.io/installation/) (Install via `brew install hugo` on macOS)

## Running the Project

1. **Clone the repository and initialize submodules:**
   ```bash
   git clone <repository-url>
   cd wagmi-book
   git submodule update --init --recursive
   ```

2. **Start the development server:**
   ```bash
   hugo server
   ```

3. **View the site:**
   Open [http://localhost:1313](http://localhost:1313) in your browser

## Building for Production

```bash
hugo
```

Static files will be generated in the `public/` directory.

