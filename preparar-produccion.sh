#!/bin/bash

echo "🚀 Preparando proyecto para producción..."
echo ""

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}📋 Checklist de Preparación${NC}"
echo ""

# 1. Verificar que git esté instalado
echo -e "${YELLOW}1. Verificando Git...${NC}"
if command -v git &> /dev/null; then
    echo -e "${GREEN}✅ Git instalado${NC}"
else
    echo "❌ Git no instalado. Instálalo desde: https://git-scm.com/"
    exit 1
fi

# 2. Inicializar git si no existe
if [ ! -d .git ]; then
    echo -e "${YELLOW}2. Inicializando Git...${NC}"
    git init
    echo -e "${GREEN}✅ Git inicializado${NC}"
else
    echo -e "${GREEN}✅ Git ya inicializado${NC}"
fi

# 3. Crear .gitignore si no existe
if [ ! -f .gitignore ]; then
    echo -e "${YELLOW}3. Creando .gitignore...${NC}"
    cat > .gitignore << 'EOF'
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# prisma
prisma/migrations
dev.db
dev.db-journal
EOF
    echo -e "${GREEN}✅ .gitignore creado${NC}"
else
    echo -e "${GREEN}✅ .gitignore ya existe${NC}"
fi

# 4. Verificar que node_modules exista
echo -e "${YELLOW}4. Verificando dependencias...${NC}"
if [ -d node_modules ]; then
    echo -e "${GREEN}✅ Dependencias instaladas${NC}"
else
    echo "⚠️  Instalando dependencias..."
    npm install
fi

# 5. Generar NEXTAUTH_SECRET
echo ""
echo -e "${BLUE}🔐 Generando NEXTAUTH_SECRET...${NC}"
SECRET=$(openssl rand -base64 32)
echo -e "${GREEN}Tu NEXTAUTH_SECRET:${NC}"
echo "$SECRET"
echo ""

# 6. Mostrar instrucciones
echo ""
echo -e "${BLUE}📝 PRÓXIMOS PASOS:${NC}"
echo ""
echo "1️⃣  Crea una cuenta en Supabase:"
echo "   https://supabase.com"
echo ""
echo "2️⃣  Crea un nuevo proyecto y obtén el Connection String"
echo ""
echo "3️⃣  Crea una cuenta en Vercel:"
echo "   https://vercel.com"
echo ""
echo "4️⃣  Sube tu código a GitHub:"
echo "   git add ."
echo "   git commit -m 'Initial commit'"
echo "   git remote add origin https://github.com/TU-USUARIO/qr-wedding-seating.git"
echo "   git push -u origin main"
echo ""
echo "5️⃣  En Vercel, importa tu repositorio y agrega estas variables:"
echo ""
echo -e "${YELLOW}DATABASE_URL${NC}=tu-connection-string-de-supabase"
echo -e "${YELLOW}NEXTAUTH_URL${NC}=https://tu-proyecto.vercel.app"
echo -e "${YELLOW}NEXTAUTH_SECRET${NC}=$SECRET"
echo -e "${YELLOW}NEXT_PUBLIC_APP_URL${NC}=https://tu-proyecto.vercel.app"
echo ""
echo "6️⃣  Después del deploy, configura la base de datos:"
echo "   DATABASE_URL='tu-url-de-supabase' npx prisma db push"
echo "   DATABASE_URL='tu-url-de-supabase' npx prisma db seed"
echo ""
echo -e "${GREEN}✅ Proyecto preparado para producción${NC}"
echo ""
echo "📖 Lee PASOS-RAPIDOS.md para más detalles"
echo ""
