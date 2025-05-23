import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    {
      label: '<h5>"저는 시스템 개선을 통해 비즈니스 임팩트를 만드는 프론트엔드 개발자입니다."</h5>',
      description: '',
    },
    {
      label: '구성원들의 협업을 위해 시스템을 만드는 걸 좋아합니다.',
      description:
        '- 디자인‧프론트 간 불일치를 줄이기 위해 Storybook 기반 UI 시스템을 제안하고 환경을 구축하여, 컴포넌트 재사용률을 향상시켜 신규 페이지 개발 시간을 단축했습니다.<br/>- 코드 리뷰 누락으로 일정이 지연되는 문제를 해결하고자, GitHub Actions와 Discord Webhook을 연동한 코드 리뷰 알림 봇을 구현했습니다. 그 결과, 봇 도입 후 코드 리뷰 누락으로 인한 지연 건수를 주 평균 5회에서 2회로 60% 감소시켰습니다.',
    },
    {
      label: '여러 개선을 통해 더 좋은 서비스를 만들기 위해 노력합니다.',
      description:
        '- 서비스의 초기 로딩 속도 개선을 위해 불필요한 스크립트 제거, 브릿지‧API 병행 호출, 핵심 CSS 분리 등의 최적화를 진행하여 주요 페이지의 LCP(Largest Contentful Paint) 시간을 평균 5초에서 2.5초로 약 50% 단축한 경험이 있습니다.<br/>- 프로젝트에 임할 때는 기획 단계부터 참여하고, 프로젝트 마무리 시에는 회고 밋업을 주도합니다. 특히, UIUX 개편 시에는 로그 분석을 통해 개편 후 기존 기능의 사용률이 30% 증가했음을 검증했습니다. 또한, 로그 분석 중 OCR 인증 과정에서 높은 사용자 이탈률을 발견하고, 플로우 개선 필요성을 제시하여 실제 프로젝트 개선에 반영시켰습니다.',
    },
    {
      label: '품질과 유지보수를 위해 테스트·리팩터링 문화를 주도합니다.',
      description:
        '- 복잡한 비즈니스 로직을 Composable 함수로 분리하고 Jest를 활용한 단위 테스트를 작성하여, ATM · 빠른 결제 등 핵심 기능의 안정성을 높였습니다. 또한 한 컴포넌트에서 관리하던 비즈니스 로직을 관심사에 따라 분리하여 코드 가독성 향상 및 유지보수 비용을 절감하였습니다.<br/>- 모노레포 환경을 구축하고 Release Drafter 자동화를 도입해 서비스의 버저닝 관리 효율을 높였으며, eslint 커스텀 룰을 정의하여 레거시 문법 사용을 제한하고 개편된 코드 스타일을 강제함으로써 코드 일관성을 확보하고 잠재적 오류를 감소시켰습니다.',
    },
    {
      label: '배움과 공유를 통한 확장을 중시합니다.',
      description:
        '- 개발자로서, 그리고 팀 구성원으로서 성장하기 위해 매주 최신 개발 트렌드를 학습하고, 격주 단위로 블로그에 기록하며 알게 된 지식을 팀 내 기술 세미나를 통해 공유합니다.<br/>- PrimeReact·Vue·HeroUI 등 여러 오픈소스 프로젝트에 버그 수정, 기능 개선 제안 및 문서화 기여 등을 통해 1년 이상 꾸준히 참여하고 있습니다. 이 과정에서 다양한 버그 해결 패턴과 실무에서 접하기 어려운 최신 기술 트렌드를 익히며 경험을 확장하고 있습니다.',
    },
  ],
  sign: 'Tux',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
