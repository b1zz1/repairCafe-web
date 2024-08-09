import { Button } from "@/components/ui/button/button"

import IconCafe from "@/components/ui/iconCafe"

const ActionIcon = (icon) => {
  return (
    <Button variant="outline" size="icon">
      <IconCafe icon={icon}/>
    </Button>
  )
}

export { ActionIcon }

// Não está funcionando
