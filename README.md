Submission for Flip interview

## Getting Started

Project was created using [Expo](https://expo.dev/)

To run the app, run the following command

```
yarn android
```

or

```
yarn ios
```

To run the test, run the following command

```
yarn test
```

## Requirements

Transaction List Page

- [x] it has list of transactions
    - [x] it can be searched or filtered by
        - name
        - sender bank
        - beneficiary bank
        - transaction's amount
    - [x] it can be sorted by
        - name A-Z
        - name Z-A
        - date newest
        - date oldest
- [x] Detail Page
    - [x] App navigated to Detail Page when transaction row on Transaction List Page is pressed.
    - [x] it has all informations about the selected transaction
    - [x] it has a back button

- [x] You must use React Native
- [x] You must use typescript
- [x] You must obtain data only from https://recruitment-test.flip.id/frontend-test using API call,
- [x] You must NOT use utility library such as Moment.js, Lodash, date-fns, etc,
- [x] You must create one reusable custom hooks
- [x] You must use a navigation library - [react-navigation](https://reactnavigation.org/)
- [x] You are allowed to use state management library - [react-query](https://tanstack.com/query/v3/)

### Checklist

Make sure the app meets the following requirements:

- [x] No violation of stated requirements
- [x] No crashes during exploration
- [x] Transaction list page is present
- [x] Detail Transaction page shows correct transaction information
- [x] Filter/search/sort functionality are working

## Bonus Point

- [x] Minimized render times - Please see #37 #40
    - Summary
        - Use profiler to know which component are rendered.
        - Use `useMemo` to cache computed value.
        - Child component will re-render when state in the current component. Use `memo` to avoid this re-render.
        - Not everything is worth memoizing. Need to find the balance of readibility and optimization.
        - Make the component as related and isolated on the same purpose as possible.
- [ ] Import optimization -
