import { useContract, useContractRead, useContractWrite, usePrepareContractWrite, useSigner } from "wagmi";
import {
  GREETING_CONTRACT_ABI,
  GREETING_CONTRACT_ADDRESS,
} from "../../contracts";
import { useEffect, useState } from "react";
import { Button, Input } from "antd";

const TestSC = () => {
  const { data: signer, isError, isFetching } = useSigner();
  //const signer = await provider.getSigner("")
  const contract = useContract({
    address: GREETING_CONTRACT_ADDRESS,
    abi: GREETING_CONTRACT_ABI,
    signerOrProvider: signer,
  });
  // const [greeting, setGreeting] = useState<string>("");
  // const fetchGreeting = async () => {
  //   if (contract) {
  //     console.log("con cotract");

  //     const greeting = await contract.greet();
  //     setGreeting(greeting);
  //   }
  //   console.log("ko con cotract");
  // };
  // useEffect(() => {
  //   fetchGreeting();
  // }, [contract]);

  const {data: greetRes,  isLoading: isLoadingGreeting, isError: isErrorGreet, refetch}: any =useContractRead({
    address: GREETING_CONTRACT_ADDRESS,
    abi: GREETING_CONTRACT_ABI,
    functionName: "greet",
  })
  const [greet, setGreet] = useState<string>("");
  const { config, error } = usePrepareContractWrite({
    address: GREETING_CONTRACT_ADDRESS,
    abi: GREETING_CONTRACT_ABI,
    functionName: 'setGreeting',
    args: [greet],
  })

  const { writeAsync } = useContractWrite(config)
  
  const handleCallSetGreet = async () => {
    if(!writeAsync) return;
    const tx = await writeAsync()
    const txReceipt = await tx.wait();
    console.log(txReceipt);
    await refetch();
  }

  return (
    <div>
      <p>Current greeting sc value: {greetRes}</p>
      <Input type="text" value={greet} onChange={e => setGreet(e.target.value)} />
      <Button onClick={handleCallSetGreet}>Set greeting</Button>
      <Button onClick={refetch}>refetch value</Button>
    </div>
  );
};

export default TestSC;
