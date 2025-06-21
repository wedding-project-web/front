# 프로젝트 실행 방법

이 문서는 웨딩 예약 시스템 프론트엔드 프로젝트를 실행하는 방법을 설명합니다.

## 필요 조건

- Node.js (최신 LTS 버전 권장)
- npm 또는 yarn 또는 pnpm

## 설치 및 실행 방법

### 1. 의존성 설치

프로젝트 루트 디렉토리에서 다음 명령어를 실행하여 필요한 패키지를 설치합니다:

```bash
# npm 사용 시
npm install

# yarn 사용 시
yarn

# pnpm 사용 시
pnpm install
```

### 2. 개발 서버 실행

개발 모드로 애플리케이션을 실행하려면 다음 명령어를 사용합니다:

```bash
# npm 사용 시
npm run dev

# yarn 사용 시
yarn dev

# pnpm 사용 시
pnpm dev
```

이 명령어는 Vite 개발 서버를 시작하며, 기본적으로 `http://localhost:5173`에서 애플리케이션에 접근할 수 있습니다.

### 3. 프로덕션 빌드

프로덕션용 빌드를 생성하려면 다음 명령어를 실행합니다:

```bash
# npm 사용 시
npm run build

# yarn 사용 시
yarn build

# pnpm 사용 시
pnpm build
```

빌드된 파일은 `dist` 디렉토리에 생성됩니다.

### 4. 프로덕션 빌드 미리보기

빌드된 프로덕션 버전을 로컬에서 미리보려면 다음 명령어를 실행합니다:

```bash
# npm 사용 시
npm run preview

# yarn 사용 시
yarn preview

# pnpm 사용 시
pnpm preview
```

## 추가 정보

- 이 프로젝트는 React, TypeScript, Vite를 사용하여 구축되었습니다.
- 라우팅은 react-router-dom을 통해 처리됩니다.
- 상태 관리는 Recoil을 사용합니다.
- API 요청은 React Query와 Axios를 사용합니다.