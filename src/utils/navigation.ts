import { useNavigate } from 'react-router-dom';

export function useEarlyAccessNavigation() {
  const navigate = useNavigate();

  const goToEarlyAccess = (selectedPlan?: string) => {
    if (selectedPlan) {
      navigate(`/early-access?plan=${encodeURIComponent(selectedPlan)}`, {
        state: { selectedPlan },
      });
    } else {
      navigate('/early-access');
    }
  };

  return { goToEarlyAccess };
}
