
## Requisitos

### Trame

`python` (probado en Python 3.13.12)

`Node.js` (probado en Node.js 24.4.1)



## Instalación

### Trame
```bash
cd trame
# init de venv
python -m venv .venv
source .venv/bin/activate
# instalación de requisitos
python -m pip install -r requirements.txt
```

### Next.js
```bash
cd nextjs
# instalación de requisitos
npm install
```

## Iniciar 

### Trame
```bash
cd trame
source .venv/bin/activate
python app.py --server # (con venv activa)
```

### Next.js

```bash
cd nextjs
npm run dev
```

> [!NOTE]
> Si se inicia Trame luego que Next.js, hará falta refrescar la página.

## Uso

Se puede acceder a la web en `http://localhost:3000`.
El output de Trame existe en el puerto 8080 por defecto.