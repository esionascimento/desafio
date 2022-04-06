const aux = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    /* 'plugin:@typescript-eslint/recommended', */
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    /* camelcase: ['error', { allow: ['aa_bb'] }],
    '@typescript-eslint/camelcase': [' error ', { properties: ' never ' }] */
  }
}

export default aux