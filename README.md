## 1. Install
```bash
cd mathflat_assignment
yarn
```

## 2. Getting Started
```bash
yarn start
```

## 3. Description
* 초기데이터는 App의 getProblems로 호출
* 유사문항 클릭 시, App의 getActive와 getSimilarData 호출
* 삭제 클릭 시, App의 deleteProblem 호출
* 추가 클릭 시, App의 addSimilarPromblem 호출
* 교체 클릭 시, App의 alterProblem 호출
* 상태관리는 context 사용
