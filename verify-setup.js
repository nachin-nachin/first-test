#!/usr/bin/env node

/**
 * Script de verificación del setup
 * Ejecutar: node verify-setup.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando setup de QR Wedding Seating...\n');

let errors = 0;
let warnings = 0;

// Verificar archivos críticos
const criticalFiles = [
  'package.json',
  'prisma/schema.prisma',
  'prisma/seed.ts',
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/lib/prisma.ts',
  'src/lib/auth.ts',
  '.env.example',
];

console.log('📁 Verificando archivos críticos...');
criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - FALTA`);
    errors++;
  }
});

// Verificar .env
console.log('\n🔐 Verificando configuración...');
if (fs.existsSync('.env')) {
  console.log('  ✅ .env existe');
  const envContent = fs.readFileSync('.env', 'utf8');
  
  const requiredVars = [
    'DATABASE_URL',
    'NEXTAUTH_URL',
    'NEXTAUTH_SECRET',
    'NEXT_PUBLIC_APP_URL'
  ];
  
  requiredVars.forEach(varName => {
    if (envContent.includes(varName)) {
      console.log(`  ✅ ${varName} configurado`);
    } else {
      console.log(`  ❌ ${varName} - FALTA`);
      errors++;
    }
  });
} else {
  console.log('  ⚠️  .env no existe - copia .env.example');
  warnings++;
}

// Verificar node_modules
console.log('\n📦 Verificando dependencias...');
if (fs.existsSync('node_modules')) {
  console.log('  ✅ node_modules existe');
} else {
  console.log('  ❌ node_modules - ejecuta: npm install');
  errors++;
}

// Verificar estructura de carpetas
console.log('\n📂 Verificando estructura...');
const requiredDirs = [
  'src/app/admin',
  'src/app/api',
  'src/app/w',
  'src/components/ui',
  'src/lib',
  'prisma',
];

requiredDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`  ✅ ${dir}/`);
  } else {
    console.log(`  ❌ ${dir}/ - FALTA`);
    errors++;
  }
});

// Verificar archivos de documentación
console.log('\n📚 Verificando documentación...');
const docs = [
  'README.md',
  'INSTRUCCIONES-RAPIDAS.md',
  'CHECKLIST-IMPRESION-QR.md',
  'ejemplo-invitados.csv',
];

docs.forEach(doc => {
  if (fs.existsSync(doc)) {
    console.log(`  ✅ ${doc}`);
  } else {
    console.log(`  ⚠️  ${doc} - recomendado`);
    warnings++;
  }
});

// Resumen
console.log('\n' + '='.repeat(50));
console.log('📊 RESUMEN');
console.log('='.repeat(50));

if (errors === 0 && warnings === 0) {
  console.log('✅ Todo perfecto! El proyecto está listo.');
  console.log('\n🚀 Próximos pasos:');
  console.log('   1. npm install');
  console.log('   2. Configura .env con tu base de datos');
  console.log('   3. npm run db:push');
  console.log('   4. npm run db:seed');
  console.log('   5. npm run dev');
} else {
  if (errors > 0) {
    console.log(`❌ ${errors} error(es) encontrado(s)`);
  }
  if (warnings > 0) {
    console.log(`⚠️  ${warnings} advertencia(s)`);
  }
  console.log('\n📖 Revisa los mensajes arriba para corregir.');
}

console.log('\n💡 Para más ayuda, lee INSTRUCCIONES-RAPIDAS.md');
