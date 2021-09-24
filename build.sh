#!/usr/bin/env bash
set -euo pipefail

yarn run esbuild \
    --bundle \
    --outdir=public/dist \
    --loader:.png=file \
    --loader:.woff2=file \
    --loader:.svg=file \
    --public-path=https://neilyio-lowkey-take-home.netlify.app/dist \
    --format=iife \
    --define:process.env.NODE_ENV="\"production\"" \
    src/index.tsx
