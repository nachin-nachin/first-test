#!/bin/bash

# Script de prueba de APIs
# Uso: ./test-api.sh

BASE_URL="http://localhost:3000"
SLUG="maria-y-juan-2025"

echo "🧪 Testing QR Wedding Seating APIs"
echo "=================================="
echo ""

# Test 1: Buscar invitado
echo "📝 Test 1: Buscar invitado 'ana'"
curl -X POST "${BASE_URL}/api/w/${SLUG}/lookup" \
  -H "Content-Type: application/json" \
  -d '{"name":"ana"}' \
  -s | jq '.'
echo ""
echo ""

# Test 2: Buscar invitado que no existe
echo "📝 Test 2: Buscar invitado inexistente"
curl -X POST "${BASE_URL}/api/w/${SLUG}/lookup" \
  -H "Content-Type: application/json" \
  -d '{"name":"zzzzz"}' \
  -s | jq '.'
echo ""
echo ""

# Test 3: Check-in con PIN incorrecto
echo "📝 Test 3: Check-in con PIN incorrecto"
curl -X POST "${BASE_URL}/api/w/${SLUG}/checkin" \
  -H "Content-Type: application/json" \
  -d '{"guestId":"test-id","pin":"9999"}' \
  -s | jq '.'
echo ""
echo ""

# Test 4: Buscar boda inexistente
echo "📝 Test 4: Buscar boda inexistente"
curl -X POST "${BASE_URL}/api/w/boda-inexistente/lookup" \
  -H "Content-Type: application/json" \
  -d '{"name":"test"}' \
  -s | jq '.'
echo ""
echo ""

echo "✅ Tests completados"
echo ""
echo "💡 Para tests completos, usa:"
echo "   - Postman collection"
echo "   - Jest/Vitest tests"
echo "   - Playwright E2E tests"
