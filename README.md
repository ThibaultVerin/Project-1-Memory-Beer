# Memory-Beer

#Procédure Git/Github

Lorsque vous souhaitez envoyez vos fichiers sur Github tout en restant à jour de la branche Dev :
1 - Faire un commit git :

- git add <fichiers à ajouter>
- git comit -m "...."
  2 - Mettre à jour sa branche locale Dev par rapport à la branche locale distance :
- git checkout dev <!-- pour repasser sur la branche dev -->
- git pull <!-- pour récupérer les fichiers présents sur la branche distante dev>
  <!-- à ce moment là, il est possible d'avoir un conflit entre la branche distante Dev et la branche locale Dev. Régler le conflit (VS code permet de le régler facilement car il colore les anciennes lignes de code et les nouvelles). Dans tous les cas il faut garder ce qui vient de la branche distante Dev -->
  <!-- La branche locale dev est désormais à jour -->
  3 - Retourner sur votre branche sur laquelle vous travaillez
- git checkout <votre nom de branche sur lequelle vous travaillez>
- git merge dev <!-- Permet de mettre à jour vos fichiers par rapport à la branche Dev. Il y aura peut-être des conflits à régler -->

<!-- Une fois les conflits réglés votre branche locale sur laquelle vous travaillez est à jour de la branche locale dev et de la branche distante dev -->

4 - Vous pouvez désormais envoyer vos fichiers sur votre branche distante

- git push origin <nom de la branche>
<!-- A ce moment là vous aurez des conflits à régler entre votre branche locale et votre branche distante. Logiquement il faut conserver les ajouts provenant de la branche locale et supprimer ce qui était sur la branche distante (car celle-ci n'est pas à jour des changements que vous venez de faire) -->

5 - Allez sur github et faire un pull request. Il ne devrait pas y avoir de conflit à cette étape.
6 - Faire valider votre pull request par quelqu'un de l'équipe avant de faire une fusion de votre branche distante avec la branche distante dev (merge)
