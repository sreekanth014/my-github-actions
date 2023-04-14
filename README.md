# Personal workshop for GitHub Action Items

##### This repository is a PoC on how GitHub Actions works

Regardless of whether this CI/CD task is part of our daily process, sometimes we don't have the space to test, play and try to modify workflows directly.

So, because of that, I create this workshop to promote playing with GitHub Actions

## PoC

### Code

- This repository has a basic function
```
export function double({value}: SumProps): number {
  return (value * 2)
}
```

And also a basic test for that `double` function
```
import { double } from './double'

describe('testing double function', () => {
  test('should multiply by two the value', () => {
    const result = double({ value: 5 })
    expect(result).toBe(10)
  })
})
```

### Workflow

#### Steps into the `workflow.yml`

1. Display a message
2. `actions/checkout@v2`
3. Execute command to install dependencies
4. Execute command to build the app
5. Execute command to run the test file
6. Conditional step if any step before has an error
7. Conditional step if some step before has an error

# Let's play, and feel free to fail!

---

## Available Scripts in the project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
