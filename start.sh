#!/usr/bin/env bash
set -euo pipefail

yarn run esbuild \
    --bundle \
    --serve \
    --servedir=resources \
    --outdir=resources/dist \
    --loader:.png=file \
    --loader:.woff2=file \
    --loader:.svg=file \
    --public-path=http://localhost:8000/dist \
    resources/src/index.tsx
