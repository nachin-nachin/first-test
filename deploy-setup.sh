#!/bin/bash

echo "🚀 Preparando proyecto para GitHub y Netlify..."
echo ""

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 1. Verificar Git
echo -e "${BLUE}📋 Paso 1: Verificando Git...${NC}"
if command -v git &> /dev/null; then
    echo -e "${GREEN}✅ Git instalado${NC}"
else
    echo -e "${RED}❌ Git no instalado. Instálalo desde: https://git-scm.com/${NC}"
    exit 1
fi

# 2. Verificar Node
echo -e "${BLUE}📋 Paso 2: Verificando Node.js...${NC}"
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}✅ Node.js $NODE_VERSION instalado${NC}"
else
    echo -e "${RED}❌ Node.js no instalado${NC}"
    exit 1
fi

# 3. Verificar dependencias
echo -e "${BLUE}📋 Paso 3: Verificando dependencias...${NC}"
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✅ Dependencias instaladas${NC}"
else
    echo -e "${YELLOW}⚠️  Instalando dependencias...${NC}"
    npm install
fi

# 4. Verificar archivos necesarios
echo -e "${BLUE}📋 Paso 4: Verificando archivos...${NC}"

FILES=(
    "package.json"
    "next.config.js"
    "tsconfig.json"
    ".gitignore"
    "netlify.toml"
    ".env.example"
    "README.md"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $file${NC}"
    else
        echo -e "${RED}❌ $file falta${NC}"
    fi
done

# 5. Generar NEXTAUTH_SECRET
echo ""
echo -e "${BLUE}🔐 Paso 5: Generando NEXTAUTH_SECRET...${NC}"
if command -v openssl &> /dev/null; then
    SECRET=$(openssl rand -base64 32)
    echo -e "${GREEN}Tu NEXTAUTH_SECRET:${NC}"
    echo "$SECRET"
    echo ""
    echo -e "${YELLOW}Guarda este secret para usarlo en Netlify${NC}"
else
    echo -e "${YELLOW}⚠️  OpenSSL no disponible. Genera el secret manualmente.${NC}"
fi

# 6. Verificar .env
echo ""
echo -e "${BLUE}📋 Paso 6: Verificando .env...${NC}"
if [ -f ".env" ]; then
    echo -e "${YELLOW}⚠️  .env existe (no se subirá a GitHub)${NC}"
    echo -e "${GREEN}✅ Esto es correcto para seguridad${NC}"
else
    echo -e "${YELLOW}⚠️  .env no existe${NC}"
    echo -e "${BLUE}Copia .env.example a .env para desarrollo local${NC}"
fi

# 7. Inicializar Git
echo ""
echo -e "${BLUE}📋 Paso 7: Configurando Git...${NC}"
if [ -d ".git" ]; then
    echo -e "${GREEN}✅ Git ya inicializado${NC}"
else
    echo -e "${YELLOW}Inicializando Git...${NC}"
    git init
    echo -e "${GREEN}✅ Git inicializado${NC}"
fi

# 8. Verificar .gitignore
echo ""
echo -e "${BLUE}📋 Paso 8: Verificando .gitignore...${NC}"
if grep -q "node_modules" .gitignore && grep -q ".env" .gitignore; then
    echo -e "${GREEN}✅ .gitignore configurado correctamente${NC}"
else
    echo -e "${YELLOW}⚠️  .gitignore puede necesitar ajustes${NC}"
fi

# 9. Mostrar estado de Git
echo ""
echo -e "${BLUE}📋 Paso 9: Estado de Git...${NC}"
git status --short | head -10

# 10. Instrucciones finales
echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Proyecto preparado para GitHub y Netlify${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${BLUE}📝 PRÓXIMOS PASOS:${NC}"
echo ""
echo -e "${YELLOW}1️⃣  Crear repositorio en GitHub:${NC}"
echo "   https://github.com/new"
echo ""
echo -e "${YELLOW}2️⃣  Subir código a GitHub:${NC}"
echo "   git add ."
echo "   git commit -m 'Initial commit: QR Wedding Seating Pro'"
echo "   git branch -M main"
echo "   git remote add origin https://github.com/TU-USUARIO/qr-wedding-seating.git"
echo "   git push -u origin main"
echo ""
echo -e "${YELLOW}3️⃣  Crear cuenta en Supabase:${NC}"
echo "   https://supabase.com"
echo "   - Crea un proyecto"
echo "   - Copia el Connection String"
echo ""
echo -e "${YELLOW}4️⃣  Desplegar en Netlify:${NC}"
echo "   https://netlify.com"
echo "   - Import from GitHub"
echo "   - Selecciona tu repositorio"
echo "   - Agrega variables de entorno:"
echo "     • DATABASE_URL (de Supabase)"
echo "     • NEXTAUTH_URL (URL de Netlify)"
echo "     • NEXTAUTH_SECRET (el generado arriba)"
echo "     • NEXT_PUBLIC_APP_URL (URL de Netlify)"
echo ""
echo -e "${YELLOW}5️⃣  Configurar base de datos:${NC}"
echo "   DATABASE_URL='tu-url-de-supabase' npx prisma db push"
echo "   DATABASE_URL='tu-url-de-supabase' npx prisma db seed"
echo ""
echo -e "${GREEN}📖 Lee DEPLOY-GITHUB-NETLIFY.md para guía completa${NC}"
echo ""
echo -e "${BLUE}🎉 ¡Listo para desplegar!${NC}"
echo ""
