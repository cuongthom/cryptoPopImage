import { Button, Modal } from "antd";
import { useNetwork, useSwitchNetwork } from "wagmi";
import { bscTestnet } from "wagmi/chains";

const SwitchChainModal = ({ open }: any) => {
  const { chain = { id: 0 } } = useNetwork();
  const { error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  const handleSwitchChain = () => {
    if (!switchNetwork) {
      console.log("can not sw network");
      return;
    }
    switchNetwork(bscTestnet.id);
  };
  return (
    <Modal title="Wrong network" open={open} footer={[]} closable={false}>
      <Button
        loading={isLoading && pendingChainId === bscTestnet.id }
        disabled={!switchNetwork || chain.id === bscTestnet.id}
        onClick={handleSwitchChain}
      >
        switch net work
      </Button>
      <div>{error && error.message}</div>
    </Modal>
  );
};

export default SwitchChainModal;
