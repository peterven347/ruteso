export function AppEntry() {
    const store = useRef(undefined);
    const queryClient = useRef(undefined);
  
    const [isAppReady, setIsAppReady] = useState(false);
  
    useEffect(() => {
      initialize().then((context) => {
        store.current = context.store;
        queryClient.current = context.queryClient;
  
        setIsAppReady(true);
      });
    }, []);
  
    return (
      <WithSplashScreen isAppReady={isAppReady}>
        <StoreProvider store={store.current}>
          <QueryClientProvider client={queryClient.current}>
            <SafeAreaProvider>
              <KeyboardAvoidingView>
                <ModalProvider>
                  <Router />
                </ModalProvider>
              </KeyboardAvoidingView>
            </SafeAreaProvider>
          </QueryClientProvider>
        </StoreProvider>
      </WithSplashScreen>
    );
  }

  export function AppEntry() {
    const store = useRef(undefined);
    const queryClient = useRef(undefined);
  
    const [isAppReady, setIsAppReady] = useState(false);
  
    useEffect(() => {
      initialize().then((context) => {
        store.current = context.store;
        queryClient.current = context.queryClient;
  
        setIsAppReady(true);
      });
    }, []);
  
    return (
      <WithSplashScreen isAppReady={isAppReady}>
        <StoreProvider store={store.current}>
          <QueryClientProvider client={queryClient.current}>
            <SafeAreaProvider>
              <KeyboardAvoidingView>
                <ModalProvider>
                  <Router />
                </ModalProvider>
              </KeyboardAvoidingView>
            </SafeAreaProvider>
          </QueryClientProvider>
        </StoreProvider>
      </WithSplashScreen>
    );
  }