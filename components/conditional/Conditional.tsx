interface ConditionalProps {
  condition?: boolean;
  whenTrue?: JSX.Element;
  whenFalse?: JSX.Element;
  children?: JSX.Element;
}

const Conditional = ({
  whenTrue,
  whenFalse,
  condition = false,
  children,
}: ConditionalProps) => {
  if (whenTrue) {
    return <>{condition ? whenTrue : whenFalse}</>;
  } else {
    return <>{condition ? children : null}</>;
  }
};

export default Conditional;
