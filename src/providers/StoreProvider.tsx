"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
// import { makeStore, AppStore } from "../lib/store";
// import { initializeCount } from "../lib/features/counter/counterSlice";
import { AppStore, makeStore } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Loading from "@/components/shared/Loading";

export default function StoreProvider({
  //   count,
  children,
}: {
  //   count: number;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  const persistedStore = persistStore(storeRef.current);
  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={<Loading />} persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  );
}
