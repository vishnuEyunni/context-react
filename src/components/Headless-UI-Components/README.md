# Introduction

The component `Coinflipper` is actually like an HOC which wraps up the logic inside it and lets the children have to deal with rendering the props.

It's lifting up the logic and and it doesn't render anything. It leaves it upto to the child component, that takes care of consuming the props, and the functionalities.

See the component `Coinflipper.tsx` on how to lift up the logic in a component and `App.tsx` on how it was consumed.

The component `Before_CoinFlipper.tsx` is added to show how the component was before the logic was separated.

## References

This is based on the reference from [HEADLESS USER INTERFACE COMPONENTS](https://www.merrickchristensen.com/articles/headless-user-interface-components/).
