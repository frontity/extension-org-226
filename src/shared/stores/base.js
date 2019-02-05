import { types, getParent, getEnv } from 'mobx-state-tree';

export default types
  .model('Organization')
  .views(self => ({
    get root() {
      return getParent(self, 1);
    },
  }))
  .actions(self => ({
    addProcessors() {
      const { h2r } = self.root.theme;
      const { high, medium, low } = getEnv(self).organization.processors;

      high.forEach(processor => h2r.addProcessor(processor, 'high'));
      medium.forEach(processor => h2r.addProcessor(processor, 'medium'));
      low.forEach(processor => h2r.addProcessor(processor, 'low'));
    },
  }));
