/** @type {import("prettier").Config} */
const config = {
  // 포맷팅에 사용할 플러그인을 지정합니다.
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],

  // 일반적인 포맷팅 옵션을 설정합니다.
  tabWidth: 2, // 탭 너비를 2칸으로 설정
  useTabs: false, // 탭 대신 공백 사용
  semi: true, // 문장 끝에 세미콜론 사용
  singleQuote: true, // 작은따옴표(') 사용
  trailingComma: "es5", // 객체/배열 끝에 후행 쉼표 사용
  printWidth: 100, // 줄 바꿈 기준 너비

  // Astro 파일에 특화된 파서 설정
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

module.exports = config;
