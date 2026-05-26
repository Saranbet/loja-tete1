// Opcional: configure Firebase aqui quando quiser usar banco de dados real.
// 1. Crie projeto no Firebase
// 2. Copie as credenciais
// 3. Substitua os valores abaixo
// 4. Importe db/auth nas páginas necessárias

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "COLOQUE_AQUI",
  authDomain: "COLOQUE_AQUI",
  projectId: "COLOQUE_AQUI",
  storageBucket: "COLOQUE_AQUI",
  messagingSenderId: "COLOQUE_AQUI",
  appId: "COLOQUE_AQUI"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
