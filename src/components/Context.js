import React from "react";

const ContextName = React.createContext('message');

const ProviderValue = ContextName.Provider;
const ConsumerValue = ContextName.Consumer;

export {ProviderValue,ConsumerValue};