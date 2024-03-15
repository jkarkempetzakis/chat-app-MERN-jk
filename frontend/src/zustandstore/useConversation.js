import { create } from "zustand";

//zustand for global state
//state var + setter 
const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),

}));

export default useConversation;