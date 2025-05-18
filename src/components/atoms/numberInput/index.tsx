import * as React from 'react';
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from '@mui/base/Unstable_NumberInput';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import themes from '../../../themes';
import { useApi } from '../../../core/contexts/api';

const NumberInput = React.forwardRef(function CustomNumberInput(
  { value, ...props }: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <BaseNumberInput
      readOnly={true}
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: 'increment',
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
        },
      }}
      value={value}
      {...props}
      ref={ref}
    />
  );
});

interface ComponentProps {
  amount: number | undefined,
}

export default function QuantityInput({ amount }: ComponentProps) {
  const { handleChangeOrderAmount } = useApi();
  
  return <NumberInput  
    aria-label="Quantity Input" min={1} max={10}
    value={amount}
    onChange={(_, value) => {
      if (typeof value === 'number') {
        handleChangeOrderAmount(value);
      }
    }}
  />;
}

const StyledInputRoot = styled('div')(
  () => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  `,
);

const StyledInput = styled('input')(
  () => `
    font-size: 1rem;
    font-family: inherit;
    font-weight: 700;
    line-height: 1.375;
    color: ${themes.red};
    border: 0 solid ${themes.black};
    outline: 0;
    width: 4rem;
    text-align: center;
  `,
);

const StyledButton = styled('button')(
  () => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    line-height: 1.5;
    border: 0px solid;
    border-radius: 999px;
    background: ${themes.red};
    color: ${themes.white};
    width: 32px;
    height: 32px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;

    &:hover {
      cursor: pointer;
    }

    &:focus-visible {
      outline: 0;
    }

    &.increment {
      order: 1;
    }
  `,
);