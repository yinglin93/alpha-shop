import styled from 'styled-components';

const FormTitle = styled.h3`
  display: flex;
  flex: 0 0 100%;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
`

const FormBody = styled.section`
  width: 100%;
  .col {
    justify-content: space-between;
    }
  .col-3 {
    width: 30%;
  }
  .col-5 {
    width: 48%;
  }
  .col-6 {
    width: 65%;
  }
  .col-12 {
    width: 100%;
  }
  .input-group {
    margin-top: 24px;

    .input-label {
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      color: var(--input-label);
      margin-bottom: 8px;
    }
    .select-container {
      position: relative;
      &::after {
        position: absolute;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
        z-index: -2;
        pointer-events: none;
        border-style: solid;
        border-width: 6px 5px 0 5px;
        border-color: var(--select-arrow) transparent transparent transparent;
        content: "";
      }
    }

    input, select {
      width: 100%;
      padding: 12px 16px;
      font-weight: 400;
      font-size: 12px;
      font-family: 'Noto Sans TC', sans-serif;
      line-height: 16px;
      border: 1px solid var(--input-border);
      border-radius: 4px;
      background-color: transparent;
    }
    input {
        color: var(--input-text);
    }
    select {
      color: var(--select-true);
      background-color: transparent;

      &:required:invalid {
          color: var(--select-false);
      }
      cursor: pointer;
      -webkit-appearance: none;

      option {
        &[value=""][disabled] {
            display: none;
        }
        color: var(--select-true);
      }
    }
  }
  .radio-group {
      position: relative;
      justify-content: unset;
      padding: 11px 20px;
      margin-top: 24px;
      cursor: pointer;

      input[type='radio'] {
          width: 20px;
          height: 20px;
          margin-right: 20px;
          align-self: center;
          -webkit-appearance: none;
      }

      input[type='radio']::before {
          content: '';
          display: block;
          width: inherit;
          height: inherit;
          border: 1px solid #222222;
          border-radius: 50%;
          background-color: #FFFFFF;
      }

      input[type='radio']:checked::before {
          border: 6px solid #2A2A2A;
          background-color: #FFFFFF;
      }

      .radio-info {
          display: flex;
          flex-grow: 1;
          flex-wrap: wrap;
          align-content: center;

          .col {
              margin-bottom: 2px;
          }
          .text {
              font-size: 14px;
              font-weight: normal;
              line-height: 20px;
          }
          .price, .period {
              font-size: 12px;
              line-height: 16px;
          }
      }

      .radio-box-border {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
      }

      input[type='radio'] ~ .radio-box-border {
          border-radius: 4px;
          border: 1px solid #F0F0F5;
      }
      input[type='radio']:checked ~ .radio-box-border {
          border: 1px solid #2A2A2A;
      }

      #shipping-standard ~ .radio-info .shipping-text {
          font-weight: normal;
      }
      #shipping-dhl ~ .radio-info .shipping-text {
          font-weight: 700;
      }
  }
`

export {FormBody, FormTitle}
