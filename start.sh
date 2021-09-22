#!/usr/bin/env bash
set -euo pipefail

yarn run esbuild \
    --bundle \
    --serve \
    --servedir=public \
    --outdir=public/dist \
    --loader:.png=file \
    --loader:.woff2=file \
    --loader:.svg=file \
    --public-path=http://localhost:8000/dist \
    public/index.tsx
